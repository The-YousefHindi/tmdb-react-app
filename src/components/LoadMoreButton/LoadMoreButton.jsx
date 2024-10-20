import "./LoadMoreButton.css";

export default function LoadMoreButton({ onClick }) {
    return (
        <div id="load-more">
            <p onClick={onClick} id="load-more-button">Load More</p>
        </div>
    )
}