import { createSlice } from '@reduxjs/toolkit';
import { evaluate as mathEvaluate } from 'mathjs'; // Import math.js evaluate

const initialState = {
  display: '0',
  formula: '',
  lastInput: '',
  evaluated: false,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    clear(state) {
      state.display = '0';
      state.formula = '';
      state.lastInput = '';
      state.evaluated = true;
    },
    inputDigit(state, action) {
      const { digit } = action.payload;
      if (state.evaluated) {
        state.display = digit;
        state.formula = digit;
        state.evaluated = false;
        state.lastInput = digit;
      } else {
        if (state.display === '0' && digit !== '.') {
          state.display = digit;
        } else {
          state.display += digit;
        }
        state.formula += digit;
        state.lastInput = digit;
      }
    },
    inputOperator(state, action) {
      const { operator } = action.payload;

      if (state.evaluated) {
        state.formula = state.display + operator;
        state.display = operator;
        state.evaluated = false;
        state.lastInput = operator;
      } else {
        if (/[+\-*/]$/.test(state.lastInput)) {
          if (operator === '-') {
            if (state.lastInput === '-') {
              state.formula = state.formula.slice(0, -1) + operator;
            } else {
              state.formula += operator;
            }
          } else {
            state.formula = state.formula.replace(/[+\-*/]+$/, operator);
          }
        } else {
          state.formula += operator;
        }
        state.display = operator;
        state.lastInput = operator;
      }
    },
    inputDecimal(state) {
      if (!state.display.includes('.')) {
        state.display += '.';
        state.formula += '.';
        state.lastInput = '.';
      }
    },
    evaluate(state) {
      try {
        const cleanedFormula = state.formula
          .replace(/([+\-*/])\1+/g, '$1') // Replace repeated operators
          .replace(/([*/+])-([*/+])/g, '$1'); // Prevent invalid sequences

        // Safely evaluate the formula using math.js
        const result = mathEvaluate(cleanedFormula);

        state.display = result.toString();
        state.formula = result.toString();
        state.evaluated = true;
        state.lastInput = result.toString();
      } catch {
        state.display = 'Error';
        state.formula = '';
      }
    },
  },
});

export const { clear, inputDigit, inputOperator, evaluate, inputDecimal } = calculatorSlice.actions;
export default calculatorSlice.reducer;
