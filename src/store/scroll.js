import { ref } from 'vue'

export const contentOpacity = ref(1)
export const maskOpacity = ref(0)
export const navBarBgOpacity = ref(0)

export function handleScroll() {
    const scrollY = window.scrollY
    const fadeDistance = 400
    const maskMax = 1

    contentOpacity.value = Math.max(0, 1 - scrollY / fadeDistance)
    maskOpacity.value = Math.min(maskMax, scrollY / fadeDistance * maskMax)
    navBarBgOpacity.value = Math.min(0.85, scrollY / fadeDistance * 0.85)
}


