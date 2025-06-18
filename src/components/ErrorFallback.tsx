import './ErrorFallback.css';

interface Props {
  error: Error;
}

const ErrorFallback = ({ error }: Props) => (
  <div role="alert" className="alert-error">
    <title>Error</title>
    <p>Something went wrong. Please try again!</p>
    <p className="alert-error__message">{error.message}</p>
  </div>
);

export default ErrorFallback;
