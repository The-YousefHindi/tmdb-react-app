import LoadMoreWrapper from "./LoadMoreWrapper.styles";

export default function LoadMoreButton({ onClick }) {
    return (
        <LoadMoreWrapper>
            <p onClick={onClick} id="load-more-button" data-testid="click-load-more-button">Load More</p>
        </LoadMoreWrapper>
    )
}