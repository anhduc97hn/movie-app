import { Badge } from "@mui/material";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <div className="media">
      <Badge
        badgeContent={(Math.ceil(vote_average *10) /10).toFixed(1)}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <h2 className="title">{title}</h2>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span>{date}</span>
      </span>
      </div>
    </ContentModal>
  );
};

export default SingleContent;