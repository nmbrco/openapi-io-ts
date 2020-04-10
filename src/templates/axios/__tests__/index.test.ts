import { generateAxiosApiTemplate } from "..";
import { ParserState } from "../../../parser/parserState";
import state from "../../__fixtures__/pet-store-state.json";

describe("templates", () => {
  it("generate getOrderById template", () => {
    const parserState: ParserState = (state as unknown) as ParserState;
    const apis = Object.values(parserState.apis).flat();

    expect(generateAxiosApiTemplate(apis)).toMatchInlineSnapshot(`
      "
              import axios from 'axios';
              import * as TE from 'fp-ts/lib/TaskEither';
              import { pipe } from 'fp-ts/lib/pipeable';
              import { ApiError, httpToApiError, decodeToParsingError } from './common';
              import * as models from './models';
          
              export function logoutUser(): TE.TaskEither<ApiError, unknown> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.get(\`/user/logout\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function deleteUser(username: string): TE.TaskEither<ApiError, unknown> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.delete(\`/user/\${username}\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function createUser(body: models.User): TE.TaskEither<ApiError, unknown> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.post(\`/user\`, body),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function updateUser(username: string, body: models.User): TE.TaskEither<ApiError, unknown> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.put(\`/user/\${username}\`, body),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function createUsersWithArrayInput(body: Array<models.User>): TE.TaskEither<ApiError, unknown> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.post(\`/user/createWithArray\`, body),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function createUsersWithListInput(body: Array<models.User>): TE.TaskEither<ApiError, unknown> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.post(\`/user/createWithList\`, body),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function loginUser(username: string, password: string): TE.TaskEither<ApiError, string> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.get(\`/user/login\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function getUserByName(username: string): TE.TaskEither<ApiError, models.User> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.get(\`/user/\${username}\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function updatePetWithForm(petId: number): TE.TaskEither<ApiError, unknown> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.post(\`/pet/\${petId}\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function addPet(body: models.Pet): TE.TaskEither<ApiError, unknown> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.post(\`/pet\`, body),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function updatePet(body: models.Pet): TE.TaskEither<ApiError, unknown> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.put(\`/pet\`, body),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function deletePet(api_key: string, petId: number): TE.TaskEither<ApiError, unknown> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.delete(\`/pet/\${petId}\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function uploadFile(petId: number): TE.TaskEither<ApiError, models.ApiResponse> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.post(\`/pet/\${petId}/uploadImage\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function findPetsByStatus(status: Array<models.StatusItemsEnum>): TE.TaskEither<ApiError, Array<models.Pet>> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.get(\`/pet/findByStatus\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function findPetsByTags(tags: Array<string>): TE.TaskEither<ApiError, Array<models.Pet>> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.get(\`/pet/findByTags\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function getPetById(petId: number): TE.TaskEither<ApiError, models.Pet> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.get(\`/pet/\${petId}\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function deleteOrder(orderId: number): TE.TaskEither<ApiError, unknown> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.delete(\`/store/order/\${orderId}\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function getInventory(): TE.TaskEither<ApiError, Record<string, unknown>> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.get(\`/store/inventory\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function placeOrder(body: models.Order): TE.TaskEither<ApiError, models.Order> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.post(\`/store/order\`, body),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }
              export function getOrderById(orderId: number): TE.TaskEither<ApiError, models.Order> {
                  return pipe(
                      TE.tryCatch(
                          () => axios.get(\`/store/order/\${orderId}\`),
                          httpToApiError
                      ),
                      TE.chain(res => pipe(
                          TE.fromEither(models.Order.decode(res.data)),
                          TE.mapLeft(decodeToParsingError)
                      ))
                  )
              }"
    `);
  });
});
