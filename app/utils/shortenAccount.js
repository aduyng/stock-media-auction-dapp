export default ({ account, numberOfCharacters = 8 }) => {
  const places = parseInt(numberOfCharacters / 2, 10);
  return `${account.substr(0, places)}...${account.substr(account.length - places, places)}`;
};
