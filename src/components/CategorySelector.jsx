import "../css/MenuBar.css";

export default function CategorySelector({ categories, onCategorySelect }) {
    return (
        <div className="MenuBar">
            <ul>
                {categories.map((category) => (
                    <li 
                        key={category.name} 
                        onClick={() => onCategorySelect(category.name)}
                        className="MenuBarLi"
                    >
                        <img 
                            src={category.logo} 
                            alt={category.name}
                            className="w-20"
                        />
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
