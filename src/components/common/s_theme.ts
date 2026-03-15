import {ref} from "vue";


export const theme = ref('') // 建议给个初始值，否则第一次可能什么都不显

// 设置主题
export function setTheme(val: string) {
    if (val === 'dark') {
        document.body.setAttribute('arco-theme', 'dark')
    } else {
        document.body.removeAttribute('arco-theme')
    }
    theme.value = val
    localStorage.setItem("theme", theme.value)
}

// 加载主题 需要再组件被调用的时候调用触发，加载localStorage存储的主体，然后进行setTheme
export function loadTheme(){
    const val = localStorage.getItem("theme")
    if (val){
        theme.value = val
        setTheme(val)
    }
}