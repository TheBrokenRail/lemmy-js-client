// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { ModlogActionType } from "./ModlogActionType";
import type { PersonId } from "./PersonId";

export interface GetModlog {
  mod_person_id?: PersonId;
  community_id?: CommunityId;
  page?: number;
  limit?: number;
  type_?: ModlogActionType;
  other_person_id?: PersonId;
}
