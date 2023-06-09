import { Link } from 'react-router-dom';

function MoreInfoButton({project}) {

  return (
    <div className="more-info-button">
      <Link to={`projects/${project.id}`} className="text-right block mt-4">More Info</Link>
    </div>
  )
}

export default MoreInfoButton