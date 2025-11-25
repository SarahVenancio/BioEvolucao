import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../constants';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (index: number) => {
    if (showFeedback) return;
    setSelectedOption(index);
  };

  const confirmAnswer = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === QUIZ_QUESTIONS[currentQuestion].correctAnswer;
    if (isCorrect) setScore(s => s + 1);
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(c => c + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <section id="quiz" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-emerald-500 font-bold tracking-wider text-sm uppercase mb-2 block">Teste seu conhecimento</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Desafio Evolutivo</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden min-h-[400px] relative">
        <AnimatePresence mode="wait">
          {!quizCompleted ? (
            <motion.div 
              key="question-panel"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 md:p-12"
            >
              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-500"
                  style={{ width: `${((currentQuestion) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6">
                <span className="text-slate-400 mr-2">#{currentQuestion + 1}</span>
                {QUIZ_QUESTIONS[currentQuestion].question}
              </h3>

              <div className="space-y-3 mb-8">
                {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => {
                  let buttonStyle = "border-slate-200 hover:bg-slate-50 hover:border-emerald-200";
                  
                  if (showFeedback) {
                    if (idx === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
                      buttonStyle = "bg-emerald-50 border-emerald-500 text-emerald-700";
                    } else if (idx === selectedOption && idx !== QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
                      buttonStyle = "bg-rose-50 border-rose-500 text-rose-700 opacity-75";
                    } else {
                      buttonStyle = "opacity-50 border-slate-100";
                    }
                  } else if (selectedOption === idx) {
                    buttonStyle = "border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(idx)}
                      disabled={showFeedback}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium flex justify-between items-center ${buttonStyle}`}
                    >
                      <span>{option}</span>
                      {showFeedback && idx === QUIZ_QUESTIONS[currentQuestion].correctAnswer && (
                        <CheckCircle size={20} className="text-emerald-600" />
                      )}
                      {showFeedback && idx === selectedOption && idx !== QUIZ_QUESTIONS[currentQuestion].correctAnswer && (
                        <XCircle size={20} className="text-rose-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Footer / Feedback */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 h-20">
                <div className="flex-1">
                  <AnimatePresence>
                    {showFeedback && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-sm p-3 rounded-lg ${selectedOption === QUIZ_QUESTIONS[currentQuestion].correctAnswer ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'}`}
                      >
                        <strong>Explicação:</strong> {QUIZ_QUESTIONS[currentQuestion].explanation}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  {!showFeedback ? (
                    <button
                      onClick={confirmAnswer}
                      disabled={selectedOption === null}
                      className="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
                    >
                      Verificar
                    </button>
                  ) : (
                    <button
                      onClick={nextQuestion}
                      className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-bold hover:bg-emerald-600 transition-colors flex items-center gap-2"
                    >
                      {currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'Próxima' : 'Ver Resultado'}
                    </button>
                  )}
                </div>
              </div>

            </motion.div>
          ) : (
            <motion.div
              key="result-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
            >
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-6 animate-bounce">
                <Trophy size={48} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Quiz Finalizado!</h3>
              <p className="text-slate-600 mb-8">Você acertou <strong className="text-emerald-600 text-xl">{score}</strong> de {QUIZ_QUESTIONS.length} perguntas.</p>
              
              <button
                onClick={resetQuiz}
                className="px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                <RefreshCw size={18} />
                Tentar Novamente
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Quiz;