import {Action, State, StateContext, StateToken} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Animal} from "./base-store.actions";

export class ZooStateModel{
  feed: string;
}

@State<ZooStateModel>({
  name: 'zoo',
  defaults: {
    feed: 'false'
  }
})

  @Injectable()
  export class AnimalsState {
  @Action(Animal.Add)
  feedAnimals(ctx: StateContext<ZooStateModel>, action: Animal.Add) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      feed: action.name
    });
  }
}
