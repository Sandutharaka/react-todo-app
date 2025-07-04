const React = require('react');

/**
 * Returns a new object with only few attributes of the original object.
 * Note: the attributes/properties will still be bound to the old object.
 *
 * @param  {Object} object     The object.
 * @param  {Array}             Array of selected attributes.
 * @return {Object}            New object with only the selected attributes.
 */
function objectWithOnly(object, attrs) {
    let newObject = {};

    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object);
    });

    return newObject;
}

/**
 * Wraps react children elements with props.
 */
function wrapChildrenWith(children, props) {
    return React.Children.map(children, child => React.cloneElement(child, props));
}

/**
 * Checks if the string includes the substring.
 *
 * @param  {String} str
 * @param  {String} substr
 * @return {Boolean}
 */
function stringInclues(str, substr) {
    return str.indexOf(substr) !== -1;
}

module.exports = {
    objectWithOnly,
    wrapChildrenWith,
    stringInclues,
};
