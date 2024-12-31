import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../models/bucket.model";

export const addToBucket = createAction(
    '[Bucket] Add Bucket',
    props<{ payload: Bucket }>()
  );

  export const removeFromBucket = createAction(
    '[Bucket] Remove Bucket',
    props<{ payload: Partial<Bucket> }>()
  );