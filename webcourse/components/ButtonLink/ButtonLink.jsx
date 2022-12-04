import Link from "next/link";


export const ButtonLink = ({children, ...props}) => {
    return (
        <Link {...props} className="text-decoration-none text-light">{children}</Link>
    );
}