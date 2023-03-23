import { classNames } from './classNames';

describe('ClassNames tests', () => {
    test('Main class', () => {
        expect(classNames('App', {}, [])).toBe('App');
    });
    test('Mods classes', () => {
        expect(classNames(
            'App',
            { open: true, border: true },
            [],
        )).toBe('App open border');
    });
    test('Mods classes with false', () => {
        expect(classNames(
            'App',
            { border: true, reset: false },
            [],
        )).toBe('App border');
    });
    test('Mods classes with undefined', () => {
        expect(classNames(
            'App',
            { border: true, clear: undefined },
            [],
        )).toBe('App border');
    });
    test('Additional classes', () => {
        expect(classNames(
            'App',
            {},
            ['first', 'second'],
        )).toBe('App first second');
    });
    test('All parameters', () => {
        expect(classNames(
            'App',
            { modal: true, clear: false },
            ['first', 'second'],
        )).toBe('App modal first second');
    });
});
