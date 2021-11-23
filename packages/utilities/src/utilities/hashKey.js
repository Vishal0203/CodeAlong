const generateHashKey = (args, separator = '||') => {
  const stringifiedArgs = args.map((arg) =>
    typeof arg === 'object' ? JSON.stringify(arg) : arg
  );
  return stringifiedArgs.join(separator);
};

export default generateHashKey;
