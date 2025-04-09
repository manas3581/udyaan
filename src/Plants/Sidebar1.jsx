import React, { useState } from 'react';

const Sidebar1 = ({ categories, showSidebar }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showAllRecords, setShowAllRecords] = useState({});

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const toggleSubcategory = (subcategory) => {
    setShowAllRecords((prev) => ({
      ...prev,
      [subcategory]: !prev[subcategory],
    }));
  };

  const removeAllFilters = () => {
    // Logic to clear all filters
  };

  if (!showSidebar) return null;

  return (
    <div className="col-lg-3 aside-column p-4 bg-white shadow-md rounded-lg">
      <div className="aside-inner">
        {/* Selected Filters */}
        <div className="hidden md:flex justify-between items-center mb-4">
          <span className="text-gray-600">Selected Filters:</span>
          <button className="text-red-500" onClick={removeAllFilters}>
            Clear all filters <i className="fa fa-times"></i>
          </button>
        </div>

        {/* Sidebar */}
        <div id="sidebar" className="ms-pr-m ms-mt-m">
          <div className="sidebar-filters">
            {categories.map((category) => (
              <div key={category.alias} className="sidebar-box mb-4 border-b pb-4">
                <div
                  className="sidebar-header cursor-pointer flex justify-between items-center"
                  onClick={() => toggleCategory(category.alias)}
                >
                  <span className="filter_heading uppercase text-lg font-semibold">{category.name}</span>
                  <span className="toggler-icon">
                    {activeCategory === category.alias ? (
                      <i className="fas fa-chevron-up" />
                    ) : (
                      <i className="fas fa-chevron-down" />
                    )}
                  </span>
                </div>
                {activeCategory === category.alias && (
                  <div className="collapse-panel mt-2">
                    <ul className="nav category-nav">
                      {category.children.map((subcategory) => (
                        <li key={subcategory.alias} className="list-item mb-2">
                          <div className="toggle_item flex justify-between items-center cursor-pointer" onClick={() => toggleSubcategory(subcategory.alias)}>
                            <a className="link_item text-gray-700 hover:text-green-600" href={`/browse/${subcategory.alias}`}>
                              {subcategory.name}
                            </a>
                            <span className="toggler-icon">
                              {showAllRecords[subcategory.alias] ? (
                                <i className="fas fa-chevron-up" />
                              ) : (
                                <i className="fas fa-chevron-down" />
                              )}
                            </span>
                          </div>
                          {showAllRecords[subcategory.alias] && (
                            <ul className="third_level-menu child-menu pl-4 mt-2">
                              {subcategory.children.map((sub2category) => (
                                <li key={sub2category.alias} className="list-item mb-1">
                                  <a className="link_item text-gray-600 hover:text-green-600" href={`/browse/${sub2category.alias}`}>
                                    {sub2category.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;