import React from 'react';

import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import Hero from '../landing_page/home/Hero';

//Test Suite means multiple test cases in one time

describe('Hero Component', () => {
    test('render hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/landing.png");
    });

    test('render signup button', () => {
        render(<Hero />);
        const signupButton = screen.getByRole("button", {name: "Sign up now"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});

