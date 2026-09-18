import Image from "next/image";

/**
 * Left panel of the split-screen login -- just the brand image, not shown
 * below lg. `/delivery-rider.svg` is a placeholder illustration standing in
 * for a real rider/bike photo -- swap the file (or this <Image> src) once
 * one is available.
 */
export function LoginBrandPanel() {
  return (
    <div className="relative hidden bg-muted lg:block">
      <Image
        src="/delivery-rider.svg"
        alt="Delivery rider on a bike"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
