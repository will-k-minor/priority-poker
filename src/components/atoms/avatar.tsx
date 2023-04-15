import { css } from "@emotion/css";
import { UserIcon } from "@heroicons/react/20/solid";

export const Avatar: React.FunctionComponent<{ imageUrl?: string }> = ({
    imageUrl,
}) => {

    const circleClass = css`
        background-color: gray;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        &:hover {
            color: black;
            border-color: black;
        }
    `


    return (
        <div className={circleClass}>
            <UserIcon />
        </div>
    )
}