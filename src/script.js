/**
 * DropdownMenu
 * Controls the Dropdown display when item is mousedover, or when mouse leaves menu area
 */
class DropdownMenu {
  constructor(menuItemElement) {
    this.menuItem = menuItemElement;
    this.dropdownMenu = this.menuItem.querySelector('#dropdown-menu');
    this.isHoveringDropdown = false;

    this.addEventListeners();
  }

  addEventListeners() {
    this.menuItem.addEventListener('mouseover', () => {
      this.dropdownMenu.classList.remove('hidden');
      this.isHoveringDropdown = true;
    });

    this.menuItem.addEventListener('mouseout', () => {
      this.isHoveringDropdown = false;
      setTimeout(() => {
        if (!this.isHoveringDropdown) {
          this.dropdownMenu.classList.add('hidden');
        }
      }, 100);
    });

    const otherMenuItems = document.querySelectorAll('#menu-item:not(#' + this.menuItem.id + ')');
    otherMenuItems.forEach((otherMenuItem) => {
      otherMenuItem.addEventListener('mouseover', () => {
        this.dropdownMenu.classList.add('hidden');
      });
    });
  }
}

// DROPDOWN MENU: Initialize the class for each menu item
const menuItems = document.querySelectorAll('#menu-item');
menuItems.forEach((menuItem) => {
  new DropdownMenu(menuItem);
});

/**
 * MobileMenu
 * toggles the display on mobile
 */
class MobileMenu {
  constructor() {
    this.menuNav = document.querySelector('#mobile-menu');
    this.dropdownMenu = document.querySelector('#mobile-dropdown');
    this.menuNav.addEventListener('click', this.toggleMenu); // Attach listener directly
  }

  toggleMenu = () => {
    const isOpen = this.menuNav.classList.toggle('mobile-open');
    this.dropdownMenu.classList.toggle('hidden', !isOpen); // Toggle `hidden` based on `isOpen`
    this.menuNav.querySelector('span').textContent = isOpen ? 'Close' : 'Menu';
  };
}

// MOBILE MENU: Initialize the class for mobile menu
new MobileMenu();
