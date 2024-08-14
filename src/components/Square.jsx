const Square = ({ position, piece, onClick }) => {
  return (
    <div className='square' onClick={onClick}>
      {piece ? <span className={`${piece}-piece`}>{piece}</span> : null}
    </div>
  )
}

export default Square;