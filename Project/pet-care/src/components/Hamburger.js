export default function Hamburger({isOpen, onClick}) {
    return (
        <>
      <div className="hamburger" onClick={onClick}>
        <i className={`fas fa-bars ${isOpen ? 'open' : ''}`}></i>
      </div>
        </>
    );
  }
  