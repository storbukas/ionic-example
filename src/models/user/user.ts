export class User {

  constructor(fields: any) {
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

}
