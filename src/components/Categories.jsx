import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children }) => (
    <div className="categories">
        <h3 class="categories__title">{children}
        </h3>
    </div>

);


export default Categories