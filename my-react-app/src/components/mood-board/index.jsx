export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div
      className="mood-board-item"
      style={{
        backgroundColor: color
      }}
    >
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}

export const MoodBoard = () => {
  const moods = [
    {
      id: 1,
      color: "green", 
      image: "",
      description: "mood 1"
    },    {
      id: 2,
      color: "brown", 
      image: "",
      description: "mood 2"
    },    {
      id: 3,
      color: "red", 
      image: "",
      description: "mood 3"
    }
  ]


  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        { moods.map((mood) => (
            <MoodBoardItem
              key={mood.id}
              color={mood.color}
              image={mood.image}
              description={mood.description}
            />
        ))  
        }
      </div>
    </div>
  )
}