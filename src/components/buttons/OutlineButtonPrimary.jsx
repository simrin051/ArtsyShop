export const OutlineButtonPrimary = ({ children, className, onClick }) => {
    return (
      <button class={`btn outline-btn-primary ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  };