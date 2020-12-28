import React from 'react';
import sublinks from './data';
import { FaTimes } from 'react-icons/fa';
import { useGloablContext } from './context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGloablContext();

    return (
        <aside className={`${isSidebarOpen ? 'show' : null} sidebar-wrapper`}>
            <div className="sidebar">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>

                <div className="sidebar-links">
                    {/* each category */}
                    {sublinks.map((item, index) => {
                        const { links, page } = item;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className="sidebar-sublinks">
                                    {/* each links */}
                                    {links.map((link, index) => {
                                        const { url, icon, label } = link;
                                        return (
                                            <a key={index} href={url}>
                                                {icon}
                                                {label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;