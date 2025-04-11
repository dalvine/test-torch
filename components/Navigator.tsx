import classNames from 'classnames';
import Link from 'next/link';

interface NavigatorItems {
    label: string;
    href: string;
}

interface NavigatorProps {
    direction: 'horizontal' | 'vertical';
    items: NavigatorItems[];
}

const Navigator: React.FC<NavigatorProps> = ({ direction, items }) => (
    <nav
        className={classNames(
            'flex gap-6 text-white',
            { 'flex-row': direction === 'horizontal' },
            { 'flex-col': direction === 'vertical' },
            '',
        )}
    >
        {items.map((item, index) => (
            <Link
                key={item.href + index}
                href={item.href}
                className="hover:underline text-lg"
            >
                {item.label}
            </Link>
        ))}
    </nav>
);

export default Navigator;
