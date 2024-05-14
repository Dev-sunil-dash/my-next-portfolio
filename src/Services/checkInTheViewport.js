export function checkInTheViewport(ele) {
    if (!ele) return false;

    const { left, right, top, bottom, width, height } = ele.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const inViewportHorizontally = centerX >= 0 && centerX <= window.innerWidth;
    const inViewportVertically = centerY >= 0 && centerY <= window.innerHeight;

    return inViewportHorizontally && inViewportVertically;
}
