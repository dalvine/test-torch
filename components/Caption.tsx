interface CaptionProps {
    children: string;
}

const Caption: React.FC<CaptionProps> = ({ children }) => {
    return <p className="text-xs text-main-0">{children}</p>;
};

export default Caption;
