
type Mods = {
    [className: string]: string | boolean;
}

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    return [
        console.log(mods),
        cls,
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional.filter(Boolean)
    ].join(' ')
}
