import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ filters, handleFilterChange }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const toggleFilter = (filter) => {
        const newSelectedFilters = selectedFilters.includes(filter)
            ? selectedFilters.filter((item) => item !== filter)
            : [...selectedFilters, filter];

        setSelectedFilters(newSelectedFilters);
        handleFilterChange(newSelectedFilters);
    };

    return (
        <div className="filter-container">
            <h1 className="filter-header">Filter by Category</h1>
            <ul>
                {filters.map((filter) => (
                    <li key={filter} className="list-item">
                        <div
                            className={`checkbox-container ${
                                selectedFilters.includes(filter)
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => toggleFilter(filter)}
                        >
                            <svg className="checkbox" viewBox="0 0 24 24">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span className="list-item-label">{filter}</span>
                    </li>
                ))}
            </ul>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="221"
                height="80"
                viewBox="0 0 221 80"
            >
                <g id="checkbx" transform="translate(8)">
                    <rect
                        id="Area"
                        width="32"
                        height="32"
                        rx="8"
                        fill="#f2f4f8"
                    />
                    <path
                        id="Check"
                        d="M2279.346,1602.008v6.359h11.607"
                        transform="translate(-2735.032 494.658) rotate(-45)"
                        fill="none"
                        stroke="#1c2126"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        opacity="0"
                    />
                </g>
                <g id="checkbx-2" data-name="checkbx" transform="translate(96)">
                    <rect
                        id="Area-2"
                        data-name="Area"
                        width="32"
                        height="32"
                        rx="8"
                        fill="#4525f2"
                    />
                    <path
                        id="Check-2"
                        data-name="Check"
                        d="M2279.346,1602.008v6.359h11.607"
                        transform="translate(-2735.032 494.658) rotate(-45)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                    />
                </g>
                <g
                    id="checkbx-3"
                    data-name="checkbx"
                    transform="translate(184)"
                >
                    <rect
                        id="Area-3"
                        data-name="Area"
                        width="32"
                        height="32"
                        rx="8"
                        fill="#f29d25"
                    />
                    <path
                        id="Check-3"
                        data-name="Check"
                        d="M2279.346,1602.008l8.691,8.691"
                        transform="translate(-2735.032 494.658) rotate(-45)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                    />
                </g>
                <text
                    id="Label"
                    transform="translate(24 53)"
                    fill="#1c2126"
                    font-size="16"
                    font-family="NotoSans-SemiBold, Noto Sans"
                    font-weight="600"
                >
                    <tspan x="-14.504" y="0">
                        Not
                    </tspan>
                    <tspan x="-23.248" y="22">
                        Select
                    </tspan>
                </text>
                <text
                    id="Label-2"
                    data-name="Label"
                    transform="translate(112 53)"
                    fill="#1c2126"
                    font-size="16"
                    font-family="NotoSans-SemiBold, Noto Sans"
                    font-weight="600"
                >
                    <tspan x="-20.304" y="0">
                        Filter
                    </tspan>
                    <tspan x="-8.096" y="22">
                        In
                    </tspan>
                </text>
                <text
                    id="Label-3"
                    data-name="Label"
                    transform="translate(200 53)"
                    fill="#1c2126"
                    font-size="16"
                    font-family="NotoSans-SemiBold, Noto Sans"
                    font-weight="600"
                >
                    <tspan x="-20.304" y="0">
                        Filter
                    </tspan>
                    <tspan x="-14.704" y="22">
                        Out
                    </tspan>
                </text>
            </svg>
        </div>
    );
};

export default Filter;
