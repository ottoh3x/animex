declare module '*.svg?raw' {
    const raw: string
    export default raw
  }

declare module '*.svg' {
    import React = require('react')
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    const src: string
    export default src
}