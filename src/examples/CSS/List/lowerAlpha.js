<>
  <p>{Faker.lorem.sentences()}</p>
  <ol className="u-paddingLeftNone u-listStylePositionInside u-listStyleTypeLowerAlpha">
    {[1, 2, 3, 4].map(item => (
      <li key={item}>{Faker.lorem.sentence()}</li>
    ))}
  </ol>
</>;
