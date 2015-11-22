export const SUCCESS = 'NOTIFY_SUCCESS';
export const ERROR = 'NOTIFY_ERROR';
export const HIDE = 'NOTIFY_HIDE';

export default function NotifyActions() {
  function success(message) {
    return {
      type: SUCCESS,
      message
    };
  }

  function error(message) {
    return {
      type: ERROR,
      message
    };
  }

  function hide() {
    return { type: HIDE };
  }

  return {
    success,
    error,
    hide
  };
}
