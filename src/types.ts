export type State = "form" | "submitted"

export interface AppState {
    state: State
    setState: (state: State) => void;
}
