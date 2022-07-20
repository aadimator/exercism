// https://exercism.org/tracks/javascript/exercises/bob/solutions/mgmatola
const isSilence = message => message.trim().length === 0;
const isShouting = message => /[a-z]/i.test(message) && message === message.toUpperCase();
const isQuestion = message => message.trim().endsWith('?');
const isShoutingQuestion = message => isShouting(message) && isQuestion(message);
const isDefault = () => true;
const rules = [
  { test: isSilence, response: 'Fine. Be that way!' },
  { test: isShoutingQuestion, response: 'Calm down, I know what I\'m doing!' },
  { test: isShouting, response: 'Whoa, chill out!' },
  { test: isQuestion, response: 'Sure.' },
  { test: isDefault, response: 'Whatever.' },
];
export const hey = message => rules
  .find(({ test }) => test(message))
  .response;

// export const hey = (message) => {
//   let transformed = message.replace(/[^a-zA-Z]+/g, '').trim();
//   console.log(transformed);
//   if (transformed.toUpperCase() === transformed && message.trim().endsWith('?') && transformed.length > 1) return 'Calm down, I know what I\'m doing!';
//   else if (transformed && transformed.toUpperCase() === transformed) return 'Whoa, chill out!';
//   else if (message.trim().endsWith('?')) return 'Sure.';
//   else if (message.trim() === '') return 'Fine. Be that way!';
//   else return 'Whatever.' ;
// };
