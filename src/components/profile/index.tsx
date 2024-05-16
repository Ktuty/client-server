/* eslint-disable @typescript-eslint/no-restricted-imports */
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { MdAlternateEmail } from "react-icons/md"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { BASE_URL } from "../../constants"
import { selectCurrent } from "../../features/user/userSlice"

export const Profile = () => {
  const current = useSelector(selectCurrent)

  if (!current) {
    return null
  }

  const { name, email, avatarUrl, id } = current

  return (
    <Card className="py-4 w-[302px">
      <CardHeader className="pb-0 pt-2 px-4 flex-col item-center">
        <Image
          alt="Card Profile"
          className="object-cover rounded-x1"
          src={`${BASE_URL}${avatarUrl}`}
          width={370}
        />
      </CardHeader>
      <CardBody>
        <Link to={`/users/${id}`}>
          <h4 className="fon-bold text-large mb-2">{name}</h4>
        </Link>
        <p className="text-default-500 flex items-center gap-2">
          <MdAlternateEmail />
          {email}
        </p>
      </CardBody>
    </Card>
  )
}
