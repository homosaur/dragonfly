function toggleCollapse(id) {
    const element = document.getElementById(id);
    if (element) {
        // Toggle between display none and block
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
    // Prevent default anchor behavior
    return false;
}
