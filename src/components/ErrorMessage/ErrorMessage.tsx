import axios, { AxiosError } from "axios";


type ErrorMessageProps = {
  error: Error | AxiosError;
};


const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div>
      <p>Oops! Something went wrong! Please reload the page!</p>
    </div>
  );
};

export default ErrorMessage;
