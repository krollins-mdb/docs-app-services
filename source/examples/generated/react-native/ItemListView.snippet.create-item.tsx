const createItem = useCallback(
  ({summary}: {summary: string}, {priority}: {priority: string}) => {
    // if the realm exists, create an Item
    realm.write(() => {
      return new Item(realm, {
        summary,
        owner_id: user?.id,
        priority
      });
    });
  },
  [realm, user],
);
