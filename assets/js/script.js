document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('a-scene').addEventListener('loaded', () => {
        document.querySelector('.preloader').setAttribute('hidden', true)
    })
})

AFRAME.registerComponent('person-events-component', {
    init() {
        this.resetAnim();
        this.el.addEventListener('areaEnter', () => {
            this.startAnim();
        })
        this.el.addEventListener('areaLeave', () => {
            this.resetAnim();
        })
    },
    startAnim() {
        this.el.setAttribute('animation-mixer', 'clip:*;')
    },
    resetAnim() {
        this.el.setAttribute('animation-mixer', 'clip:none;')
    }
});