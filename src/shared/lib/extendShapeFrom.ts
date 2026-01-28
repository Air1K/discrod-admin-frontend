import { z } from 'zod'

type AnyZodObject = z.ZodObject
type ShapeOf<T extends AnyZodObject> = T['shape']

type NoExtraKeys<Obj, Keys extends PropertyKey> = Obj & Record<Exclude<keyof Obj, Keys>, never>

export const extendShapeFrom =
  <Base extends AnyZodObject>() =>
  <S extends { [K in keyof ShapeOf<Base>]: z.ZodType<z.output<ShapeOf<Base>[K]>> }>(
    shape: NoExtraKeys<S, keyof ShapeOf<Base>>,
  ) =>
    shape
