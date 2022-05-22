export const responseData = ({ res, status, data = null, error }) => {
  if (!error)
    return res.json({
      status,
      data,
    });
  const messages = error?.errors?.map(({ message }) => message);
  return res.json({
    status,
    message: messages,
  });
};
