import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as FriendActions from '../states/friends.actions';
import * as FriendsSelector from '../states/friends.selectors';

@Injectable({
  providedIn: 'root',
})
export class FriendsStoreService {
  allFriends$ = this._store.select(FriendsSelector.selectAllFriends);
  selectedFriend$ = this._store.select(FriendsSelector.selectFriendSelected);

  constructor(private _store: Store) {}

  loadFriends(skip = 1, take = 15, filters = '') {
    this._store.dispatch(FriendActions.loadFriends({ skip, take, filters }));
  }

  loadFriend(id: number) {
    this._store.dispatch(FriendActions.loadFriend({ id }));
  }
}
