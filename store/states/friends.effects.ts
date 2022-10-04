import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { FriendsService } from 'src/app/services/friends.service';
import * as FriendsActions from './friends.actions';

@Injectable()
export class FriendsEffects {
  loadFriends$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FriendsActions.loadFriends),
      concatMap(({ skip, take, filters }) =>
        this.friendService.getAll(skip, take, filters).pipe(
          map((friends) => FriendsActions.loadFriendsSuccess({ friends })),
          catchError((error) =>
            of(FriendsActions.loadFriendsFailure({ error }))
          )
        )
      )
    );
  });

  loadFriend$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FriendsActions.loadFriend),
      concatMap(({ id }) =>
        this.friendService.getById().pipe(
          map((friend) => FriendsActions.loadFriendSuccess({ friend })),
          catchError((error) => of(FriendsActions.loadFriendFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private friendService: FriendsService
  ) {}
}
