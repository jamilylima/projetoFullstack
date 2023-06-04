import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        color: var(--color-secondary);
    }

    p {
        color: var(--color-error);
        font-size: 1.4rem;

        margin-top: 0.1rem;
        margin-bottom: 0.6rem;
    }
`