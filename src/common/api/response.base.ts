export interface BaseResponseProps {
  id: string;
}

export class IdResponse {
  constructor(id: string) {
    this.id = id;
  }
  readonly id: string;
}

/**
 * Most of our response objects will have properties like
 * id, createdAt and updatedAt so we can move them to a
 * separate class and extend it to avoid duplication.
 */
export class ResponseBase extends IdResponse {
  constructor(props: BaseResponseProps) {
    super(props.id);
  }
}
